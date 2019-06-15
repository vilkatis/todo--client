export class Utils {
  static toRecord<T extends object>(array: T[], keyName: keyof T): Record<string, T> {
    return array.reduce((dictionary, entity: T) => {
      const keyValue: any = entity[keyName];
      dictionary[keyValue] = entity;
      return dictionary;
    }, {});
  }

  static toKeyArray<T extends object>(array: T[], keyName: string): string[] {
    return array.map((entity: T) => entity[keyName]);
  }
}
