export type OmitDatabaseDateKeys<T> = Omit<T, 'createdAt' | 'updatedAt'>;
