import numpy as np
import matplotlib.pyplot as plt


t=np.linspace(-10.0,10.0,500)
plt.ylim(0,1)
f=2*np.exp((complex(-0.5,8))*-t)
plt.subplot(224)
plt.plot(t,np.real(f))

plt.xlabel('t')
plt.ylabel('x(t)')

plt.show()