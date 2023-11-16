import { ValueTransformer } from 'typeorm'

export class DecimalTransformer implements ValueTransformer {
    to(decimal?: number): number | null {
        return decimal ? Number(decimal?.toFixed(2)) : null
    }
    from(decimal?: string): number | null {
        return decimal ? Number(Number(decimal).toFixed(2)) : null
    }
}
