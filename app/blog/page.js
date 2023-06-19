import ModelBlog from "@components/ModelBlog"

const page = () => {
  return (
    <div>
        <h2 className='my-5 underline text-3xl ml-10'>Blogs</h2>
        <div className="listBlog flex">
            <ModelBlog/>
            <ModelBlog/>
            <ModelBlog/>
        </div>
    </div>
  )
}

export default page