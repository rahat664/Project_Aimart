export class Utils {
    static IsObject( data: any ): boolean {
        if ( data === null ) {
            return false;
        }
        return (typeof data === 'object');
    }

    static HasNoError( data: any ): boolean {
        if ( data || data === 0 ) {
            return true;
        }
        return !(data == null || data === '' || data === undefined);

    }

    static IsValidDate( date ): any {
        return date && Object.prototype.toString.call( date ) === '[object Date]' && !isNaN( date );
    }

    static HasValueInArray( data: any ): boolean {
        return data && Array.isArray( data ) && data.length > 0;

    }

    static ConvertToFormData<T>( formValue: T, form: FormData = null, namespace = '' ): FormData {
        const formData = form || new FormData();
        if ( !this.IsObject( formValue ) ) {
            return formData;
        }

        for ( const key of Object.keys( formValue ) ) {
            const value = formValue[key];
            const formKey = namespace ? `${ namespace }[${ key }]` : key;
            if ( this.HasNoError( value ) ) {
                if ( (formValue[key] instanceof Date) && this.IsValidDate( value ) ) {
                    const date = (new Date( value )).toUTCString();
                    formData.append( formKey, date );
                } else if ( typeof formValue[key] === 'object' && this.IsValidDate( value._d ) ) {
                    const date = (new Date( value._d )).toLocaleDateString();
                    formData.append( formKey, date );
                } else {
                    // tslint:disable-next-line: deprecation
                    if ( (formValue[key] instanceof Array) && this.HasValueInArray( value ) ) {

                        formValue[key].forEach( ( element, index ) => {
                            const tempFormKey = `${ formKey }[${ index }]`;
                            if ( element instanceof File ) {
                                formData.append( formKey, element ); // dont change formKey to temoFormKey.
                            } else {
                                if ( !this.IsObject( element ) ) {
                                    formData.append( tempFormKey, element.toString() );
                                } else if ( typeof element === 'object' ) {
                                    this.ConvertToFormData( element, formData, tempFormKey );
                                }
                            }
                        } );

                    } else if ( typeof formValue[key] == 'object' &&
                        !(formValue[key] instanceof Date) &&
                        !(formValue[key] instanceof File) &&
                        !this.HasNoError( formValue[key]._d ) ) {
                        this.ConvertToFormData( formValue[key], formData, formKey );
                    } else {
                        formData.append( formKey, value );
                    }
                }
            } else {
                formData.append( formKey, '' );
            }

        }

        return formData;
    }
}
