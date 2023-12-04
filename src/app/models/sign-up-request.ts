export interface SignUpRequest {
    id: string,
    volunteerId: string,
    name: string,
    email: string,
    password: string,
    passwordConfirmed: boolean,
    addToMailingList: boolean,
    phoneNumber: string,
    birthday:string,
    affiliations: string[],
    publicBio: string,
    adminBio: string
}
