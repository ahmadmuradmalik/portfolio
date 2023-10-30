// blogData.js

const firstBlogText = "Today we take a look at auto encoders and variations auto encoders. Auto encoders essentially are a two step process. You take an image, say a 28x28x1 gray scale image. The image encoder takes in a hyper parameter (one that you can manually tune) latent_dimension. Let’s choose 5 as our latent dimension. The encoder maps the 28x28x1 input to a 5 dimensional vector. Once we have our “latent vector”, it’s then fed into what’s called the decoder. The decoder basically tries to reverse the “encoding” done by the auto encoder to construct back the original image. To train our model, we need a differentiable loss function.  Simply taking the MSE of the pixel wise deviation is sufficient. This is how we train our model. That’s the basic pipeline of an auto encoder model. Take an image, map it to a lower dimensional latent space, then reconstruct the image back. \n \n Ok now we can reconstruct our original images back. Super cool. What if we wanted new photos tho? Well boy do I have some news for you. By altering the architecture of our auto encoder we can achieve exactly that! Such a model is then called a variational auto encoder. The key change is that instead of getting a latent vector out of the encoder, we get a latent distribution! For simplicity’s sake we will assume a Gaussian prior P for our latent distribution. This is done for various theoretical and practical reasons that i'll try to briefly talk about at the end. \n \n We input an image into our encoder net, typically a conv net and it spits out the two mean and variance vectors, the decoder then performs its normal operations like it does in the standard auto encoder. This results in an image. Ok now we have an image, most likely it’s entirely garbage. How do we train the model to make it better? You might thing backpropagation as usual, but there’s a slight issue, due to the randomness introduced we can’t take deterministic gradients which are a hard requirement for the algorithm to work. There’s a neat reparemeterization trick that will allow us to Ignore this issue and still be able to take gradients. We take a new random variable epsilon and throw all out randomness into it. This results in us treating the mean and variance vectors we get for a datapoint as constant and epsilon contains our needed randomness. This then allows us to take gradients with respect to the output of the input layers I.e the mean and variance vectors which allows backpropagation to work and so we can train out network! The loss function we use consists of two terms. The reconstruction term - I.e how faithfully we reconstruct the original image. The second term is called the KL divergence term. The KL divergence is a sort of measure of distance between distributions. A KL of 0 implies that the distributions encode the same information. This term basically calculates how far our latent distribution Q is from the assumed Gaussian prior P. The sum of these two terms is out loss function. We just then minimize the average loss for the whole data set during training. \n \n  Our encoder then maps our batch to a distribution and gives us the mean and variance vectors. The aim is to make that latent distribution (which we assume is normal) we just received as close to the and will get a mean and a variance vector. \n \n We can then randomly sample new points from that new latent distribution we have uncovered. The new random latent variable is then fed into the decoder network and the image in reconstructed, since the vector was random, our output should be new as well (we map our random latent vector back into the space of images). Actually training a VAE model in practice is a bit of a pain in the ass. I implemented VAE for a couple of different popular datasets: MNIST, FASHION-MNIST, CIFAR10  and CELEBA. The basic underlying structure of the VAE model is quite similar, for the cifar 10 and the celebA datasets I needed to add Batch Normaliztion to help In the training. The networks were also wider and deeper for celebA. It took significantly more epochs for the faces to start being generated, The model still hasn’t gotten the backgrounds right. Also something interesting I’ve noticed is that the model is better at reconstructing and generating images of people looking straight into the camera and specifically light skinned female presenting. This I believe because the dataset has more images belonging to that specific class. It’s still a bit janky with people wearing stuff out of the norm like hats or something of the sort. My encoder basically ends with 128 feature maps generated from the images. These 128 feature maps are then flattened and fed into a Fully connected Layer with the same number of neurons. This is just an intermediary step, the 128 neurons then feed into another Fully connected network with the same number of neurons as the latent dimension we chose. This is done twice, once for the mean and the log_var. These are interchangeable at this point but you need to be consistent with whichever you choose otherwise the loss functions will have a fit. \n \n The reconstructed images are a bit better than the generated images but those are nice too still/ "
const secondBlogText = "Having watched a movie and wanting a similar one is an age old problem, one which we will be tackling today. In the current iteration of our model, you input a movie names and given that the movie is in our database, we’ll recommend more. \n \n There’s a couple of different approaches one might take. Initially you could broadly classify these into two main categories: content based filtering and collaborative based filtering. For content based approaches we need data about the movies themselves, like synopsis, cast, director for example. For collaborative based approaches we need user generated data. This is usually in the form of user given movie ratings. \n \n To start off with the content based approach say we just use an overview/synopsis column. We calculate a vector of word counts for each movie. This results in a matrix of size (num_movies x total_num_unique_words). Using sklearns TF-IDF module we can easily construct this matrix. I’ll add more detailed reasoning later but say X = TF-IDF then X[i] is the normalized vector of word counts for movie i. From the high school formula \n \n$$\\theta=cos(u,v)=\\small\\frac{U\\cdot V}{|U| |V|}$$\n\nwhere u, v are the 'unnormalized' count vectors for movie i and movie j and g is the angle between them, this metric is more commonly known as the cosine similarity as well. Because of the way the TFIDF matrix is constructed, just taking a linear kernel,\n\n$$A = X^{T}X $$\n\n will give us the pairwise cosine similarity scores. So A[i][j] is the similarity score for movie i and j. Just to note this matrix should be symmetric as the score between movie j and I should be the same as well. \n \n Alternatively we could use natural language tool kit library and Word2Vec for better preprocessing and representation of our text. Using Word2Vec instead of the TFIDF matrix is better in my opinion because it allows us to capture the meaning/sentiment of the text compared to having a direct word count. Like in the former words like angry or mad would be treated similarly whereas they are two distinct objects in the latter. \n \n Some collaborative based approaches are very similar with the exception that the initial matrix used to calculate the similarity scores is different. Instead of using a word count matrix we might take our user-movie rating matrix and then construct a user user or item item interaction matrix by taking appropriate kernels. We then use these matrices to calculate cosine similarity scores and then recommend movies that match. \n \n There are alternative approaches to calculating the cosine similarity matrix ourselves. we could also use K-Nearest Neighbors instead to get a similar effect. \n \n"
const thirdBlogText = "My goal was simple. Make a cat pic generator. What I tried: Using a Generative adversarial Network (GAN). The Model architecture is simple in theory. You have Two neural Nets competing against each other. You have the Generator, which tries to generate images to fool the discriminator, which tries to catch fake images. \n \n The generator is a neural network. It takes in random noise and spits out an image. The dimension or number of features of this random noise is called the latent dimension. This is a hyperparameter that you can play around with, the value you choose does affect the results. So for something like the MNIST data, you might have the latent dimension set to 5 while for CIFAR10 you would need something higher like 15 maybe. For concreteness lets say we choose 5 to be our latent dim and we are using the MNIST data, then the generator would take the vector of noise of size 5 and will output a 28x28 matrix of grayscale pixel values. Initially this should be producing pure garbage since the model hasn’t “learned” anything yet. \n \n The discriminator is a neural network. It takes in an image and spits out a probability x,  0 <- x => the image is fake, x-> 1 => the image is real. The discriminator is first trained on a bunch of real images with labels 1 and fake images with label 0 (You might want to actually set the labels to be 0.9 and 0.1 instead to help with training convergence but more on that later). The discriminator  learns to distinguish between real and fake images. We then Train the generator to try to beat the discriminator. The generator network adjusts its parameters to try to please the discriminator, i.e make more realistic images. The discriminator is then trained again on real images and fakes generated by the generator and this back and forth game keeps going on. The generator getting better at generating realistic images and the discriminator getting better at spotting fakes generated by the generator network. All of this training is done the standard way neural nets are trained, we use something called the Wasserstein loss and then backpropagate to adjust the weights of the networks. \n \n The Model architecture and design was the easy short part to be honest (I say this but it's only easy because of the super convenient train methods in tensorFlow/Keras!). GAN convergence is such a pain. Sometimes the generator gets too creative, sometimes the discriminator gets too strong at spotting fakes and prevents the generator from being able to learn at all. Trying to tune GAN’s on even basic datasets like mnist proved to be a huge time sink.\n \n"
const fourthBlogText = "Omg it’s working! Let us begin with what’s called the gradient descent algorithm. say we have \n\n$$ f = x^{2} - 3 $$\n\n  a convex function, taken to be univariate for simplicity, though that doesn’t change anything. Functions like these show up in a lot of places nowadays, usually in optimization settings (Training neural nets, recommendation systems, options pricing etc). You can think of it as a general cost function that you are trying to optimize. In most cases then we would want to find the minimum of this function. The actual conditions on the function for us to be able to apply this algorithm are quite restrictive. The function must be convex, be continuous on its bounded domain and a few other conditions to guarantee the existence of a minima. There is a rich body of research on mapping general problems to “easy to use” functions like the one used in settings like this.  All of these requirements are met for our function f.\n\n First we must calculate something called the gradient. The gradient operator of a function  \n \n$$\\nabla f $$\n\n is the direction of steepest ascent. Basically it’s the direction that you move in to get the largest increase in the function's value. How this works is that \n \n$$\\nabla f = 2x$$\n \n is the gradient of the function f. For the single variable case this is the same as the standard derivative. for a given point x, the value of the function is then the direction of steepest descent given that we are at x and so becomes the direction we move in to get the largest decrease in the function.\n\n So we start off at some random initial value x0, in practice this choice of x0 really can have a huge effect on our function, especially given that most functions will have local minima and not just one global critical point. So for some starting values we might converge to the global minimum whereas for others we might converge to different values. \n\n One very important part of the algorithm is the step size. We’ve talked about how the gradient at the point x is the DIRECTION we want to move in, but how much should we move? This is something we manually have to set, in machine learning settings this is also called a hyper parameter. This guarantee that moving in the direction of the gradient will give the largest increase (or simply even an increase) is only valid for very small step sizes, technically it's only valid for infinitesimal step sizes but in practice small step sizes work. The same is then true for the descent case. So ideally we want a small step size. An issue with having a larger step is also that you might overshoot the minimum, this can then result in either converging to a different minima (possibly suboptimal) or could also get stuck in endless oscillation between two points.\n\n$$x^{(t + 1)} = x^{(t)} + \\alpha \\nabla f(x^{(t)}), \\text{ where } \\alpha \\text{ is the step size and t is the iteration number we are on}$$\n\nwe start of with some random initial guess x0, we then start running our algorithm \n\n$$x^{(1)} = x^{(0)} + \\alpha \\nabla f(x^{(0)})=x^{(0)} - \\alpha (2x^{(0)})$$"
const fifthBlogText = "Hi tangent spaces and cotangent bundles and stuff is under construction, please check back in like a week"

const BlogContent = [
  { postId: 1, title: 'Auto Encoders / Variational Auto Encoders', date: '2023-10-19', content: firstBlogText },
  { postId: 2, title: 'Movie Recommender System', date: '2023-10-20', content: secondBlogText },
  { postId: 3, title: 'Cat Pic Generator', date: '2023-10-21', content: thirdBlogText },
  { postId: 4, title: 'Gradient Descent', date: 'The Future', content: fourthBlogText },
  { postId: 5, title: 'Tangent Spaces and friends', date: '2023-10-23', content: fifthBlogText },
];

  
  export default BlogContent;
  