class A:
    def __init__(self, a="a", *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.a=a

    
class B(A):
    def __init__(self, b="b", *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.b=b
        self.hello='hello'
    
    def hi(self):
        print(f'hi {self.b}')
        
class OtherB(B):
    def __init__(self, b="otherB", *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.b=b

c = OtherB()
print(c.b) # otherB
c.hi() # hi otherB