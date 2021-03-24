Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.
### How Bubble Sort Works?
We take an unsorted array for our example. Bubble sort takes Ο(n2) time so we're keeping it short and precise.

<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_0.jpg"/>

Bubble sort starts with very first two elements, comparing them to check which one is greater.

<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_1.jpg"/>

In this case, value 33 is greater than 14, so it is already in sorted locations. Next, we compare 33 with 27.


<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_2.jpg"/>
We find that 27 is smaller than 33 and these two values must be swapped.


<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_3.jpg"/>
The new array should look like this −

<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_4.jpg"/>

Next we compare 33 and 35. We find that both are in already sorted positions.



<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_5.jpg"/>
Then we move to the next two values, 35 and 10.


<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_6.jpg"/>
We know then that 10 is smaller 35. Hence they are not sorted.

<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_7.jpg"/>


We swap these values. We find that we have reached the end of the array. After one iteration, the array should look like this −


<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_8.jpg"/>
To be precise, we are now showing how an array should look like after each iteration. After the second iteration, it should look like this −


<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_9.jpg "/>

Notice that after each iteration, at least one value moves at the end.



<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_10.jpg"/>
And when there's no swap required, bubble sorts learns that an array is completely sorted.


<img align="left" width="800px" src="https://www.tutorialspoint.com/data_structures_algorithms/images/bubble_sort_11.jpg"/>

Now we should look into some practical aspects of bubble sort.

### Algorithm
We assume list is an array of n elements. We further assume that swap function swaps the values of the given array elements.

```
begin BubbleSort(list)

   for all elements of list
      if list[i] > list[i+1]
         swap(list[i], list[i+1])
      end if
   end for
   
   return list
   
end BubbleSort
```