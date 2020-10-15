import numpy as np
import matplotlib.pyplot as plt
import math

x=np.arange(-10,5*np.pi,0.01)
y=np.sin(x+math.pi)

plt.xlabel(' t')
plt.ylabel('x(t)=Asin(ωt+φ)')


plt.plot(x,y)
plt.show()