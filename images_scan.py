import os

#open a file for writing in current directory
output = open('imagepaths.txt', 'w')
#os.walk iterates through the folder structure and returns the path, directory names and file names
for path, names, files in os.walk(os.getcwd()):
	#iterate through each of the returned file names
	for f in files:
	  #join the file name to the full path
		fp = os.path.join(path, f)
		#doing a lot here... 
		#1. takes the full file path, figures out where the position of images\
		#2. adds 7 to get the position after images\
		#3. replaces the \ between directories with the / (making it web friendly
		#4. '"%s",\n'%... uses string formatting to insert the string from the above steps into the format needed for the js
		#5 writes the string to the output file
		output.write ('"%s",\n'%fp[fp.find('images\\') + 7:].replace('\\', '/'))
#closes the output file... all done!
output.close()
