import React from 'react'

const Form = () => {
  return (
    <div>
      <section className=" body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">New Post</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Content of your blog post ..</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm ">Title</label>
                  <input type="text" id="name" name="name" className="w-full bg-white  text-black rounded border  focus:border-indigo-500  focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="tags" className="leading-7 text-sm ">Tags</label>
                  <input type="text" id="tags" name="tags" className="w-full bg-white  text-black rounded border  focus:border-indigo-500  focus:ring-2  text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label for="message" className="leading-7 text-sm ">Content</label>
                  <textarea id="message" name="message" className="w-full bg-white  text-black rounded border  focus:border-indigo-500  focus:ring-2  h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form