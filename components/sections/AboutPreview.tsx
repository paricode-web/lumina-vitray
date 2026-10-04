import Link from "next/link";

export default function AboutPreview(){

return(
<section
className="
py-32
bg-[#f8f5ef]
"
dir="rtl"
>

<div
className="
max-w-5xl
mx-auto
px-6
"
>

<div
className="
rounded-[3rem]
bg-white/40
backdrop-blur-2xl
border border-white/60
shadow-xl
p-10
text-center
"
>

<p
className="
text-sm
tracking-[0.5em]
text-sky-700
mb-5
"
>
ABOUT LUMINA
</p>


<h2
className="
text-4xl
md:text-5xl
font-bold
text-gray-900
"
>
داستان پشت هر اثر
</h2>


<p
className="
mt-6
text-gray-600
leading-8
max-w-2xl
mx-auto
"
>
در لومینا ویتری، شیشه تنها یک متریال نیست؛
روایتی از نور، رنگ و هنر دست است.
برای آشنایی بیشتر با داستان ما...
</p>


<Link
href="/aboutus"
className="
inline-block
mt-8
rounded-full
bg-sky-600
px-10
py-4
text-white
transition
hover:bg-sky-700
"
>
درباره ما
</Link>


</div>

</div>

</section>
)

}