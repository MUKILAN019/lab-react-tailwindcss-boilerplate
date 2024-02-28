function ContentComponent() {
    return (
      <div className="m-20 justify-center flex">
        <div className="flex shadow-md flex-wrap justify-center rounded h-20 m-3 px-10 w-fit">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="kalviumlogo" className="h-16 w-16" />
          <div className="px-5">
            <div className="font-bold">Kalvium Store</div>
            <div className="text-gray-600 font-small"> You have a new course!</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ContentComponent;