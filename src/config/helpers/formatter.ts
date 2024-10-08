export class formatter{
    public static currency(vaule: number): string{
        return new Intl.NumberFormat('en-us', {
            style:'currency',
            currency: 'USD'
        }).format(vaule)
    }
}