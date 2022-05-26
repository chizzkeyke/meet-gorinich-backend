export interface UserI {
    firstName?: string
    middleName?: string
    lastName?: string
    email: string
    password: string
    token: string
    corporate: "individual" | "entity" | "public-official"
    role: "buyer" | "admin" | "user"
    phoneNumber: number
    infoAboutCompany?: {
        INN?: string | null
        KPP?: string | null
        nameCompany?: string | null
    }
}