def merge_sort(list):
  '''
  sorts a list in ascending order
  returns a new sorted list 

  Divide: find the midpint of the list and divide into sublist 
  conquer: recusively sort the sublists created in previous step
  combine: merge the sorted sublists created in previous step
  '''
  # base case, if there is only one element or no elements left to be sorted return the list as it is already sorted.
  # base case, if list has one or zero elements return it as is
  if len(list) <=1:
    return list
  
  left_half,right_half = split(list)
  print(f'left-half {left_half}; right-half {right_half} ')
  left = merge_sort(left_half)
  right = merge_sort(right_half)
  print(f'left {left}; right {right} ')


  return merge(left,right)
    
def split(list):
  '''
  divide the unsorted list at midpoint into sublists
  Returns two sublist = left and right
  '''    
  middle = len(list)//2
  left = list[:middle]
  right = list[middle:]
  return left,right


def merge(left,right):
  '''
  merges two lists, sorting them in the process
  Returns a new merged list
  '''

  l =[]
  i=0
  j=0

  while i< len(left) and j < len(right):
    print(left,right, 'left and right')
    if left[i]<right[j]:
      l.append(left[i])
      i+=1
    else:
      l.append(right[j])
      j+=1

  while i< len(left):
    l.append(left[i])
    i+=1

  while j<len(right):
    l.append(right[j])
    j+=1
  print(l,'sorted array l')
  return l      

def verify_sorted(list):
  n = len(list)  
  if n ==0 or n ==1:
    return True
  
  return list[0]<list[1]and verify_sorted(list[1:])

alist = [54,65,23,12,33,55,76,26,34,75,105,4]

l = merge_sort(alist)
print(l)
print(verify_sorted(l))