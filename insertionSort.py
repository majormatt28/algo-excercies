my_array = [2,7,5,0,4,6]

def insertionSort(array):
    first_index = 1
    for k in range(first_index, len(array)):
        print(k, array[k])
        insert(array, k)

def insert(array, end_of_sorted):
    for k in range(end_of_sorted, 0, -1):
        if array[k] < array[k - 1]:
            array[k], array[k - 1] = array[k - 1], array[k]
        else:
            break

insertionSort(my_array)
print("final answer:", my_array)