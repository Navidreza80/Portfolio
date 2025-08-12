import Quote from "@/assets/images/quote.png";
import Image from "next/image";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Daniel Carter",
    username: "@daniel.codes",
    comment: "A true problem solver! Made collaboration super smooth.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sofia Martinez",
    username: "@sofi.designs",
    comment: "Creative, fast, and always delivers beyond expectations.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    name: "Liam Johnson",
    username: "@liam_builds",
    comment: "Turned my idea into a polished product in no time!",
  },
];

const Testimonials = () => {
  return (
    <div className="relative bg-gradient-to-t from-[#000000] to-[#390615] px-4 py-10 sm:px-10 md:px-16 lg:px-20">
      {/* Glow effects */}
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 left-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full top-0 right-0 absolute blur-[300px]" />
      <span className="w-[165px] h-[149px] bg-white rounded-full bottom-0 left-1/2 transform -translate-x-1/2 absolute blur-[300px]" />

      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="flex flex-col h-full md:max-w-[400px] w-[90%] mx-auto sm:mx-0"
          >
            {/* Top section */}
            <div className="bg-black rounded-t-3xl p-6 sm:p-8 flex-1">
              <Image
                className="w-12 h-12 sm:w-16 sm:h-16"
                src={Quote}
                width={64}
                height={64}
                alt="Quote"
              />
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-snug mt-4">
                {item.comment}
              </p>
            </div>

            {/* Bottom section */}
            <div className="flex">
              <div className="flex-1 bg-transparent flex items-center py-3 px-4 sm:px-6">
                <Image
                  src={item.image}
                  width={64}
                  height={64}
                  alt="user avatar"
                  className="rounded-full w-14 h-14 sm:w-[84px] sm:h-[84px]"
                />
                <div className="pl-4 flex flex-col">
                  <span className="text-foreground text-sm sm:text-base">
                    {item.name}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500">
                    {item.username}
                  </span>
                </div>
              </div>
              <div className="h-[90px] sm:h-[112px] w-[120px] sm:w-[168px] bg-black rounded-b-3xl"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
