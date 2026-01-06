export type SchemaSample = {
    id: string;
    value: number;
    date: Date;
};

export const testFunction = (schemaSample: SchemaSample): void => {
    console.log(`${schemaSample.date}`);
    console.log(`(*^-^*)Happy! Success`);
};
