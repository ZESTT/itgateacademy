import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        You will Do this Real Projects
      </h1>
      <div className="h-full w-full flex flex-col lg:flex-row md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/bakery.jpg"
          title="Interactive Bakery Website "
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/m.jpg"
          title="Movies Site"
          description="video subscription service. The homepage features a prominent title 'REBUNEKA THE DOLL' with a video thumbnail"
        />
         <ProjectCard
          src="/e.jpg"
          title="E-Commerce Site"
          description="This e-commerce web page is designed to showcase products, special selections, blog
 posts, and other shopping-related features. The main sections include:
 "
        />
      </div>


      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/dash.jpg"
          title="Dashboard System"
          description="dashboard interface designed for website administration purposes. The dashboard includes a navigation sidebar with options ,"
        />
        <ProjectCard
          src="/profile.jpg"
          title="Interactive Website "
          description="developer's profile page showcasing their skills, projects, and social media links. To create a similar profile page, you can follow these steps:"
        />
        <ProjectCard
          src="/4.jpg"
          title="Portfolio Website"
          description="developer's profile page showcasing their skills, projects, and social media links. To create a similar profile page, you can follow these steps:"
        />
         <ProjectCard
          src="/p.jpg"
          title="Portfolio Site"
          description="developer's profile page showcasing their skills, projects, and social media links. To create a similar profile page, you can follow these steps:"
        />


      </div>



      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      
        <ProjectCard
          src="/hh.jpg"
          title="Gemini Clone"
          description=""
        
        />
        <ProjectCard
          src="/pro.jpg"
          title="Product Mangement System"
          description=""
        />
        


      </div>



      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Our Students Ready to Work
      </h1>
      <div className="h-full w-full flex flex-col lg:flex-row md:flex-row gap-10 px-10">
        <ProjectCard
          src="/s1.jpg"
          title=""
          description=""
        />
        <ProjectCard
          src="/s2.jpg"
          title=""
          description=""
        />
        <ProjectCard
          src="/s3.jpg"
          title=""
          description=""
        />
         <ProjectCard
          src="/s4.jpg"
          title=""
          description=""
        />
      </div>
    </div>
  );
};

export default Projects;
