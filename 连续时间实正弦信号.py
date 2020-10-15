import math 
import numpy as np 
import matplotlib.pyplot as plt 

def exponential_func(x, a=3): 
  y=math.pow(a, x)
  return y


X=np.linspace(-4, 4, 40) 
Y1=[exponential_func(x,3) for x in X] 
Y2=[exponential_func(x,0.333) for x in X]
Y3=[exponential_func(x,1) for x in X]

plt.xlabel(' t')
plt.ylabel('x(t)')

plt.plot(X, Y1) 
plt.plot(X, Y2) 
plt.plot(X,Y3)
plt.show()