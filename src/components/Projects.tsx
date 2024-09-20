import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="p-4 projects" id='projects'>
      <div className="project2">
        <h1 className="text-[3vw] uppercase text-center text-[#00ffff] font-bold mb-4" id='proj-head1'>Projects</h1>
        <div className="projects-container flex justify-between items-center">
          <div>
            <div className="projects w-[50%] m-auto capitalize text-[1vw] p-2" >
              <video src="/videos/video1.mp4" preload='auto' controls autoPlay loop muted ></video>
              <h3>melody stream</h3>
              <details>
                <summary>read more</summary>
                <p>Melody Stream delivers a curated selection of music, from the latest hits to timeless classics. Enjoy
                  personalized playlists and seamless streaming for an exceptional listening experience. Discover your
                  next favorite track with Melody Stream.</p>
              </details>
            </div>
            <div className="projects w-[50%] m-auto text-[1vw] capitalize p-2">
              <video src="/videos/video4.mp4" preload='auto' controls autoPlay loop muted></video>
              <h3>photo heaven</h3>
              <details>
                <summary>read more</summary>
                <p>Discover a world of stunning images with Photo Heaven. Browse our vast collection of high-quality
                  photos, perfect for any project, and download your favorites with ease</p>
              </details>
            </div>

            <div className="projects w-[50%] m-auto text-[1vw] capitalize p-2">
              <video src="/videos/video3.mp4" preload='auto' controls autoPlay loop muted></video>
              <h3>dynamic resume generator</h3>
              <details>
                <summary>read more</summary>
                <p>Easily create a professional resume with our Dynamic Resume Generator. Simply enter your details, and
                  the tool will generate a polished, customizable resume that’s ready to download or print.</p>
              </details>
            </div>
          </div>
          <div>
            <div className="projects w-[50%] m-auto text-[1vw] capitalize p-2">
              <video src="/videos/video2.mp4" preload='auto' controls autoPlay loop muted></video>
              <h3>book portfolio</h3>
              <details>
                <summary>read more</summary>
                <p>Explore a curated selection of books, each offering a unique perspective and engaging content. From
                  gripping fiction to thought-provoking non-fiction, this portfolio showcases a variety of literary works to inspire and captivate readers.</p>
              </details>
            </div>
            <div className="projects w-[50%] m-auto text-[1vw] capitalize p-2">
              <video src="/videos/video5.mp4" preload='auto' controls autoPlay loop muted></video>
              <h3>savory scripts</h3>
              <details>
                <summary>read more</summary>
                <p>A curated selection of classic and contemporary cooking recipes, perfect for those seeking a quick and
                  easy way to enjoy their favorite dishes. Discover your next favorite recipe with Savory Scripts.</p>
              </details>
            </div>
            <div className="projects w-[50%] m-auto text-[1vw] capitalize p-2">
              <video src="/videos/video6.mp4" preload='auto' controls autoPlay loop muted></video>
              <h3>pakola clone</h3>
              <details >
                <summary>read more</summary>
                <p>A replica of Pakola's website created using HTML, CSS, and Bootstrap. It features a clean, responsive
                  design to practice layout and styling techniques.</p>
              </details>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;


