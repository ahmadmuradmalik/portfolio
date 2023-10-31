import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: "Math Library",
      description: "Ahmads Math Library! Go check it out :) ahmadsMathLibrary is a Python-based numerical methods library designed to offer efficient solutions for complex mathematical challenges. It provides state-of-the-art iterative solvers for solving large-scale linear systems, among other mathematical operations",
      github: "https://github.com/ahmadmuradmalik/ahmadsMathLibrary"
    },
    {
      title: "Fake Face Generator",
      description: "Designed and implemented a Variational Autoencoder, trained it on the CelebA dataset for high-quality facial image synthesis. This VAE uses convolutional layers to capture encode/decode images. Mainly used to generate new synthetic facial images.",
      github: "https://github.com/ahmadmuradmalik/CelebA-Variational-Autoencoder"
    },
    {
      title: "Stock price prediction using RNN's",
      description: "Attempt at going through coding up a basic rnn model and feeding on apple stock prices for the last 5 years. Tried implementing both vanilla rnns and LSTM's. Initial Attempt at time series forecasting.",
      github: "https://github.com/ahmadmuradmalik/RNN-stock-attempt"
    },
    {
      title: "Gitlet",
      description: "Created a Git-like version control system with comprehensive functionalities, including file tracking, committing, merging, reverting to previous versions and creating multiple branches.  utilized optimized data structures such as ArrayLists, HashMaps, LinkedLists, and Graphs to store and manage file data effectively. Has the ability to create multiple repositories.",
      github: "https://github.com/ahmadmuradmalik/Gitlet"
    },
    {
        title: "Housing Prices Analysis",
        description: "Took US housing prices and then fitted models to predict houses given various predecided features. Tested different types of models (LinearRegression, RandomForests, NearestNeighbor) and then compared their performance with each other using multiple metrics to decide on the best one",
        github: "https://github.com/ahmadmuradmalik/Basic-Housing-Analysis"
      },
  ];

  return (
    <div className="portfolio-container">
      <h1>Ahmad's Portfolio</h1>
      <br></br>
      <p>I'm currently recruiting for SWE and data science jobs. Ideally something backend, fullstack or a ML engineer role</p>

      <p>I am proficient in  Python, Java, Matlab, JavaScript, Git, React.js, NumPy, SciPy, PyTorch, TensorFlow, Pandas, Scikit-learn</p>
      <p>Here are some of my projects:</p>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;