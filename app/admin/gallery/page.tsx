import { addGalleryImage } from "./actions";

export default function GalleryAdmin() {
  return (
    <div className="min-h-screen bg-[#f8f5ef] p-8" dir="rtl">

      <div className="max-w-xl mx-auto">

        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          border border-gray-100
          p-8
        ">

          <div className="mb-8 text-center">

            <h1 className="
              text-3xl
              font-bold
              text-gray-900
            ">
              افزودن تصویر گالری
            </h1>

            <p className="
              mt-3
              text-gray-500
            ">
              یک اثر جدید به نمایشگاه Lumina اضافه کنید
            </p>

          </div>


          <form
            action={addGalleryImage}
            encType="multipart/form-data"
            className="space-y-6"
          >

            <div className="space-y-2">

              <label className="
                text-sm
                font-medium
                text-gray-700
              ">
                عنوان تصویر
              </label>

              <input
                name="title"
                placeholder="مثلاً: پنجره نورانی"
                className="
                  w-full
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  px-5 py-3
                  outline-none
                  transition
                  focus:border-sky-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-sky-100
                "
              />

            </div>


            <div className="space-y-2">

              <label className="
                text-sm
                font-medium
                text-gray-700
              ">
                توضیحات
              </label>

              <textarea
                name="description"
                placeholder="توضیح کوتاه درباره اثر..."
                rows={4}
                className="
                  w-full
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  px-5 py-3
                  resize-none
                  outline-none
                  transition
                  focus:border-sky-400
                  focus:bg-white
                  focus:ring-4
                  focus:ring-sky-100
                "
              />

            </div>


            <div className="space-y-2">

              <label className="
                text-sm
                font-medium
                text-gray-700
              ">
                تصویر اثر
              </label>

              <input
                name="image"
                type="file"
                accept="image/*"
                className="
                  block
                  w-full
                  cursor-pointer
                  rounded-2xl
                  border
                  border-dashed
                  border-gray-300
                  bg-gray-50
                  px-5
                  py-4
                  text-sm
                  text-gray-500
                  file:mr-4
                  file:rounded-xl
                  file:border-0
                  file:bg-sky-100
                  file:px-4
                  file:py-2
                  file:text-sky-700
                  hover:border-sky-400
                "
              />

            </div>


            <button
              type="submit"
              className="
                w-full
                rounded-2xl
                bg-sky-600
                py-4
                text-white
                font-semibold
                shadow-lg
                shadow-sky-200
                transition
                hover:bg-sky-700
                hover:-translate-y-0.5
                active:translate-y-0
              "
            >
              آپلود تصویر
            </button>


          </form>

        </div>

      </div>

    </div>
  );
}