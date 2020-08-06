function deepEqual(first, second) {
    if (typeof first !== typeof second || Object.keys(first).length !== Object.keys(second).length)
    {
        return false;
    }

    for (const property in first) {
        if (!first.hasOwnProperty(property) || !second.hasOwnProperty(property) || first[property] !== second[property])
        {
            return false;
        }
    }
    return true;
}

const obj1 = {a: 1, b: 2};
const obj2 = {a: 1, b: 2};
console.log(deepEqual(obj1, obj2)); // true

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
console.log(deepEqual(arr1, arr2)); // false