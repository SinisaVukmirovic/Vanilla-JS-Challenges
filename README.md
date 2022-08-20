# DOM Challenges

## Element.insertAdjacentElement()
### The insertAdjacentElement() method of the Element interface inserts a given element node at a given position relative to the element it is invoked upon.
### insertAdjacentElement(position, element)
#### position
#### A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:
#### 'beforebegin': Before the targetElement itself.
#### 'afterbegin': Just inside the targetElement, before its first child.
#### 'beforeend': Just inside the targetElement, after its last child.
#### 'afterend': After the targetElement itself.
#### element
#### The element to be inserted into the tree.

## Element.insertAdjacentHTML()
### The insertAdjacentHTML() method of the Element interface parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
### insertAdjacentHTML(position, text)
#### position
#### A string representing the position relative to the element. Must be one of the following strings:
#### "beforebegin"
#### Before the element. Only valid if the element is in the DOM tree and has a parent element.
#### "afterbegin"
#### Just inside the element, before its first child.
#### "beforeend"
#### Just inside the element, after its last child.
#### "afterend"
#### After the element. Only valid if the element is in the DOM tree and has a parent element.
#### text
#### The string to be parsed as HTML or XML and inserted into the tree.

## Element.closest()
### The closest() method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

___

# Array Challenges

