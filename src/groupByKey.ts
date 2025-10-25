type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  const sorted = [...items].sort((a: T, b: T) => {
    const vA = a[key];
    const vB = b[key];

    if (typeof vA === 'number' && typeof vB === 'number') {
      return vA - vB;
    }

    if (typeof vA === 'string' && typeof vB === 'string') {
      return vA.localeCompare(vB);
    }

    return 0;
  });

  for (const item of sorted) {
    const groupId = String(item[key]);

    if (!result[groupId]) {
      result[groupId] = [item];
    } else {
      result[groupId].push(item);
    }
  }

  return result;
}
