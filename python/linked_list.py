class Node:
  '''
  an object for storing a single node of a linked list.
  Models two attributes =data and the link to the next node in the list  
  '''
  data = None
  next_node= None

  def __init__(self,data):
    self.data = data


  def __repr__(self):
    return f'<Node data: {self.data}'  
  

class LinkedList: 
  '''
  singly linked list
  '''
  
  def __init__(self):
    self.head = None

  def is_empty(self):
    return self.head == None
  
  def size(self):
    '''
    Returns the number of nodes in the list. Takes 0(n) time linear
    '''
    current = self.head
    count =0 

    while current:  # while current is true
      count +=1
      current = current.next_node

    return count  

  def add (self,data):
    '''
    adds a new node containing data at the head of  the list. takses constant time
    '''
    new_node = Node(data)
    new_node.next_node= self.head
    self.head=new_node

  def search(self,key):
    '''
    Search for the first node containing data that matches the key
    Returns the nod of None if not found
    '''
    current = self.head

    while current:
      if current.data == key:
        return current
      else:
        current = current.next_node
    return None    

  def insert(self,data,index):
    '''
    insets a new node containing data at index postion 
    '''

    if index ==0:
      self.add(data)

    if index >0:
      new =Node(data)
      position = index
      current = self.head
      while position >1:
        current = new.next_node
        position -=1
      prev_node =current
      next_node = current.next_node

      prev_node.next_node = new
      new.next_node = next_node

  def remove(self,key):
    '''
    removes node containing data that matches the key
    returns node if key deosnt exist
    '''
    current = self.head
    previous = None
    found =False

    while current and not found:
      if current.data == key and current is self.head:
        found = True
        self.head = current.next_node
      elif current.data== key:
        found =True
        previous.next_node = current.next_node
      else:
        previous = current
        current= current.next_node
    return current      
  
  def node_at_index(self,index):
    if index==0:
      return self.head
    else:
      currrent = self.head
      position =0

      while position <index:
        currrent= currrent.next_node
        position+=1

      return currrent  

  def __repr__(self): 
    '''
    Returns a string representaion of the list
    '''
    nodes =[]
    current = self.head

    while current:
      if current is self.head:
        nodes.append(f"[Head: {current.data}]")
      elif current.next_node is None:
        nodes.append(f"[Tail: {current.data}]")
      else:
        nodes.append(f"[{current.data}]")
      
      current = current.next_node

    return " -> ".join(nodes)


# n1 = Node(10)
# n2 = Node(20)
# n1.next_node=n2
# print(n1.next_node)
# l = LinkedList()
# n1= Node(10) 
# l.head = n1
# print(l.size())


l = LinkedList()
l.add(1)
l.add(2)
l.add(3)
l.add(4)
l.add(5)
l.add(6)


print(l.search(2))