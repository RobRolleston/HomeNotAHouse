import os

output = open('imagepaths.txt', 'w')
for path, names, files in os.walk(os.getcwd()):
	for f in files:
		fp = os.path.join(path, f)
		output.write ('"%s",\n'%fp[fp.find('images\\') + 7:].replace('\\', '/'))
output.close()
