"use client";

import techstacksData from "./techstack.json";
import * as SimpleIcons from "simple-icons/icons";

/**
 * ICON RENDERER
 */
function Icon({ icon }) {
  if (icon.startsWith("/")) {
    return (
      <img 
        src={icon} 
        alt="icon" 
        className="w-6 h-6 shrink-0 object-contain" 
      />
    );
  }

  const ico = SimpleIcons[icon];
  
  if (!ico) {
    return <div className="w-6 h-6 bg-gray-200 rounded-sm shrink-0" />;
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={`#${ico.hex}`}
      className="shrink-0"
    >
      <path d={ico.path} />
    </svg>
  );
}

/**
 * GROUP ITEMS BY CATEGORY
 */
const groupByCategory = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.use]) acc[item.use] = [];
    acc[item.use].push(item);
    return acc;
  }, {});
};

export default function Techstack() {
  const grouped = groupByCategory(techstacksData);

  return (
    <section
      id="techstack"
      className="
        bg-[#eef4fc]
        border-y border-[#c4c7c7]
        py-[120px]
      "
    >
      <div className="px-[20px] md:px-[64px] max-w-[1280px] mx-auto">

        {/* HEADER */}
        <div className="max-w-2xl mb-[70px]">

          <h2
            className="
              text-[32px] md:text-[48px]
              font-semibold
              leading-[1.2]
              tracking-[-0.02em]
              text-[#161c22]
              uppercase
              mb-4
            "
          >
            Tech Stack
          </h2>

          <p
            className="
              text-[18px]
              leading-[1.6]
              text-[#434747]
            "
          >
            The modern tools and frameworks I use to develop scalable, 
            high-performance systems across the full stack.
          </p>

        </div>

        {/* GRID OF CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">

          {Object.entries(grouped).map(([category, items]) => (
            <div
              key={category}
              className="
                p-[40px]
                bg-white
                border border-[#dde3eb]
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-black
                rounded-md
              "
            >

              {/* CATEGORY TITLE */}
              <h3
                className="
                  text-[14px]
                  uppercase
                  tracking-[0.2em]
                  font-semibold
                  text-[#161c22]
                  mb-[32px]
                  border-b border-[#c4c7c7]
                  pb-2
                  inline-block
                "
              >
                {category}
              </h3>

              {/* LIST */}
              <div className="space-y-[16px]">

                {items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3"
                  >

                    <Icon icon={item.icon} />

                    <span
                      className="
                        text-[14px]
                        text-[#434747]
                      "
                    >
                      {item.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}