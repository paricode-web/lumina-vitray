type GalleryImage = {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
};


export default function Gallery({
  images
}: {
  images: GalleryImage[];
}) {


return (

<section
  className="
    relative
    min-h-screen
    w-full
    py-32
    overflow-hidden
  "
  dir="rtl"
>

{/* Background lights */}

<div
className="
absolute
top-20
right-20

w-72
h-72

bg-sky-200/30

rounded-full

blur-3xl

"
/>



<div
className="
relative
max-w-7xl
mx-auto

px-6

"
>


{/* Header */}

<div
className="
text-center
mb-24
"
>
<p 
className="
text-sm
tracking-[0.6em]
uppercase

text-sky-500

mb-5

font-semibold

drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]

animate-pulse

"
>
Gallery
</p>


<h2
className="
text-5xl
md:text-6xl
pt-2
font-semibold

bg-gradient-to-r
from-sky-300
via-slate-100
to-sky-500

bg-clip-text
text-transparent

tracking-tight

[ text-shadow:0_0_25px_rgba(56,189,248,0.35) ]

"
>
گالری آثار
</h2>


<p
className="
mt-6

max-w-2xl
mx-auto

text-gray-400

text-lg

leading-8
"
>
مجموعه‌ای از تابلوهای شیشه‌ای دست‌ساز که با نور، رنگ و هنر جان گرفته‌اند.
</p>


</div>





{/* Cards */}

<div
className="
grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

gap-12

"
>



{
images.map((item,index)=>(


<div

key={item.id}

className={`
group

relative

rounded-[2.5rem]

p-[1px]


bg-gradient-to-br

from-white

via-sky-200/70

to-amber-200/40


shadow-xl

shadow-sky-200/30


transition-all

duration-700


hover:-translate-y-4


${index % 3 === 1
?
"lg:-translate-y-12"
:
""
}

`}

>


{/* Inner glass card */}

<div
className="
relative

overflow-hidden

rounded-[2.5rem]

bg-[#faf7f1]

h-full

"
>



{/* Image */}

<img

src={item.imageUrl}

alt={item.title}


className="
w-full

h-[560px]

object-cover


transition-transform

duration-700


group-hover:scale-110

"

/>





{/* Dark glass overlay */}

<div

className="
absolute

inset-0


bg-gradient-to-t

from-black/80

via-black/20

to-transparent


"
/>






{/* Glass reflection */}

<div

className="
absolute

top-0
left-0

w-full
h-1/2


bg-gradient-to-b

from-white/20

to-transparent


opacity-0

group-hover:opacity-100


transition

duration-700

"

/>





{/* Text */}

<div

className="
absolute

bottom-8

right-8

left-8


text-white

"

>


<h3

className="
text-3xl

font-bold

mb-3

"

>
{item.title}
</h3>



{
item.description && (

<p

className="
text-white/80

leading-7

text-sm

"

>

{item.description}

</p>

)
}



</div>






{/* Inner frame */}

<div

className="
absolute

inset-5

rounded-[2rem]


border

border-white/30


group-hover:border-white/70


transition-all

duration-500


pointer-events-none

"

>




</div>



{/* Light corner */}

<div

className="
absolute

top-6

right-6


w-20

h-20


rounded-full


bg-white/20


blur-xl


opacity-0


group-hover:opacity-100


transition


"

 />


</div>


</div>



))

}



</div>



</div>



</section>


)

}