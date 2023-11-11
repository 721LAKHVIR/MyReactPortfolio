import React from 'react';
import { data } from "../data/data.js";


const Work = () => {

    // projects file
    const project = data;
    //setProject(data);
  
  return (
    
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent work</p>








        </div>
      

          {/* Project Descriptions */}
          <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            Machine Learning Approach for optimizing piezoelectric property of PVDF | Master's Thesis Project | IIT Roorkee
          </h2>
          <p className='text-white'>
            Executed univariate and bivariate analysis, observed the kurtosis of curves and analyzed the distribution in EDA. Utilized Spearman Correlation and PCA for dimensionality reduction from 39 to 5 variables and data visualization. Implemented SVM, Boosted Trees, Weighted KNN, and Logistic Regression with K-fold Cross-Validation to optimize the voltage.
          </p>
        </div>

        <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            Web Application to Visualize Sorting Algorithms | Self Project(Not Verified by PIC)
          </h2>
          <p className='text-white'>
            Developed a web application using HTML , CSS and JavaScript to visualize various sorting algorithms. Implemented Separation of Concerns and added a visualization speed control feature for better intuition.
          </p>
        </div>

        <div className='mb-8 p-6 bg-[#122040] rounded-md shadow-lg'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            Sentiment Analysis using NLP | IIT Roorkee
          </h2>
          <p className='text-white'>
            Processed 500K+ reviews for 70K+ products by 250K+ users with stop words, tokenization & lemmatization. Used Naive Bayes for modeling, applied SMOTE for imbalance, and evaluated with sensitivity & specificity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
