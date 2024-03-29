import { urlForImage } from "@/sanity/lib/image";
import { getBlog } from "@/sanity/sanity-utils"
import Image from "next/image";


export default async function Blog({params}:{params:{slug:string}}){

    const blog = await getBlog(params.slug);

    return (
      <section className="w-full min-h-screen">
        <div className="max-w-4xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12  flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
          <h2 className="text-4xl">{blog.title}</h2>
          <div className="relative w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-md">
            <Image
              src={urlForImage(blog.image).url()}
              fill
              alt={blog.slug}
              className="object-cover rounded-md"
            />
          </div>
          <div className="flex flex-row gap-2 items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-[30px] h-[30px] rounded-full relative">
                <Image
                  src={urlForImage(blog.authorimage).url()}
                  fill
                  className="rounded-full object-cover"
                  alt={blog.author}
                />
              </div>
              <p className="text-yellow">{blog.author}</p>
            </div>
            <p className="text-[12px] text-gray-400 italic">
              {new Date(blog._createdAt).toLocaleDateString("en", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <p className="text-gray-600">{blog.content}</p>
        </div>
        <div className="max-w-4xl m-auto px-4 sm:px-6 lg:px-8  p-16 pb-8 sm:pb-12  flex flex-col space-y-6 mt-10 sm:mt-16 lg:mt-24">
          <div className="p-4">
            <div className="text-gray-600">
              <label className="block text-gray-700 text-sm font-bold mb-2">Add Comment:</label>
              <textarea
                id="comment"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Type your comment..."
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">Add Comment</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}