export default function ServiceCard({ img, title, description }) {
  return (
    <div 
      className="
        group relative bg-white 
        border border-gray-200 rounded-2xl 
        overflow-hidden shadow-md hover:shadow-xl 
        hover:border-indigo-200 hover:shadow-indigo-100/40 
        transition-all duration-300 hover:-translate-y-2
      "
    >
      {/* Full-width top image */}
      <div className="relative aspect-[4/3] md:aspect-[5/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="
            absolute inset-0 w-full h-full object-cover 
            transition-transform duration-700 
            group-hover:scale-105
          "
        />
        {/* Very subtle hover tint (optional – can be removed if too much) */}
        <div className="
          absolute inset-0 bg-gradient-to-t from-indigo-600/5 via-transparent to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        " />
      </div>

      {/* Content area */}
      <div className="p-6 lg:p-8 space-y-4 lg:space-y-5">
        <h3 className="
          text-xl lg:text-2xl font-bold 
          text-gray-900 text-center 
          group-hover:text-indigo-700 transition-colors duration-300
        ">
          {title}
        </h3>

        <p className="
          text-gray-600 text-base leading-relaxed 
          text-center
        ">
          {description}
        </p>
      </div>

      {/* Subtle bottom accent line on hover */}
      <div className="
        absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-indigo-500 to-violet-500 
        scale-x-0 group-hover:scale-x-100 origin-center 
        transition-transform duration-500
      " />
    </div>
  );
}