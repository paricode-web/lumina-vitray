
export default function AboutUsPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f8f5ef] text-gray-900"
    >
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-6 text-sm tracking-[0.5em] text-sky-700">
            ABOUT LUMINA
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            داستان پشت هر اثر
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-600">
            در لومینا ویتری، شیشه فقط یک متریال نیست؛
            ترکیبی از نور، رنگ، ظرافت و هنر دست است که
            به یک اثر منحصربه‌فرد تبدیل می‌شود.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm tracking-[0.3em] text-sky-700">
              OUR STORY
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              جایی میان نور
              <br />
              و هنر
            </h2>

            <div className="mt-8 space-y-5 text-gray-600 leading-8">
              <p>
                لومینا با یک ایده ساده شکل گرفت؛ اینکه یک اثر هنری
                بتواند بخشی از فضای زندگی ما باشد و هر بار که نور
                از میان آن عبور می‌کند، حس تازه‌ای ایجاد کند.
              </p>

              <p>
                ما تلاش می‌کنیم هر اثر را با دقت و توجه به جزئیات
                طراحی کنیم؛ از انتخاب رنگ‌ها گرفته تا ترکیب فرم‌ها
                و نحوه قرار گرفتن نور در کنار شیشه.
              </p>

              <p>
                نتیجه، آثاری است که قرار نیست فقط یک فضای خالی را
                پر کنند؛ بلکه بخشی از شخصیت محیط را شکل می‌دهند.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] border border-white/70 bg-white/40 shadow-2xl backdrop-blur-2xl" />

            <div className="absolute -bottom-6 -right-6 rounded-3xl border border-white/60 bg-white/60 px-6 py-5 shadow-xl backdrop-blur-xl">
              <p className="text-sm text-gray-500">
                نور • رنگ • هنر
              </p>

              <p className="mt-1 font-semibold">
                ساخته شده برای ماندن
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white/50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm tracking-[0.3em] text-sky-700">
              WHAT WE BELIEVE
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              چیزی که برای ما مهم است
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-lg backdrop-blur-xl">
              <span className="text-3xl">✦</span>

              <h3 className="mt-6 text-2xl font-bold">
                اصالت
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                هر اثر باید شخصیت خودش را داشته باشد و چیزی
                فراتر از یک محصول تکراری باشد.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-lg backdrop-blur-xl">
              <span className="text-3xl">◌</span>

              <h3 className="mt-6 text-2xl font-bold">
                ظرافت
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                جزئیات کوچک هستند که یک اثر معمولی را به چیزی
                تبدیل می‌کنند که بتوان با آن ارتباط برقرار کرد.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-lg backdrop-blur-xl">
              <span className="text-3xl">◇</span>

              <h3 className="mt-6 text-2xl font-bold">
                ماندگاری
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                هدف ما ساخت آثاری است که فقط برای امروز نباشند
                و بتوانند سال‌ها بخشی از یک فضا باقی بمانند.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm tracking-[0.3em] text-sky-700">
              THE PROCESS
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              از ایده تا اثر
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              هر اثر مسیر خودش را طی می‌کند؛ از یک ایده اولیه تا
              لحظه‌ای که در فضای شما قرار می‌گیرد.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-gray-900 p-8 text-white">
              <span className="text-sm text-sky-300">01</span>

              <h3 className="mt-6 text-2xl font-bold">
                ایده
              </h3>

              <p className="mt-4 leading-8 text-gray-300">
                شکل، رنگ و حال‌وهوای اثر قبل از شروع ساخت
                مشخص می‌شود.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-lg backdrop-blur-xl">
              <span className="text-sm text-sky-700">02</span>

              <h3 className="mt-6 text-2xl font-bold">
                خلق
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                جزئیات اثر با دقت و تمرکز روی ترکیب رنگ،
                فرم و نور شکل می‌گیرد.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/60 p-8 shadow-lg backdrop-blur-xl">
              <span className="text-sm text-sky-700">03</span>

              <h3 className="mt-6 text-2xl font-bold">
                زندگی
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                اثر وارد فضای شما می‌شود و بخشی از داستان
                آن محیط را به وجود می‌آورد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32 pt-10">
        <div className="mx-auto max-w-4xl rounded-[3rem] bg-gray-900 px-8 py-16 text-center text-white shadow-2xl md:px-16">
          <p className="text-sm tracking-[0.3em] text-sky-300">
            FIND YOUR PIECE
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            آماده‌ای اثر خودت را پیدا کنی؟
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-300">
            مجموعه آثار لومینا را ببین و اثری را پیدا کن که
            با فضای تو ارتباط برقرار می‌کند.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-medium text-gray-900 transition hover:-translate-y-1"
          >
            مشاهده محصولات
          </a>
        </div>
      </section>
    </main>
  );
}

