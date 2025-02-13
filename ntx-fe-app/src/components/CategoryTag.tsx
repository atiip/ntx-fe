import React from "react";

interface CategoryTagProps {
  id: string;
  name: string;
  isSelected?: boolean;
  onClick?: (id: string) => void;
}

const CategoryTag = ({ id, name, isSelected, onClick }: CategoryTagProps) => {
  return (
    <div className="flex justify-start items-center ">
      <div
        className={`w-fit flex justify-center items-center rounded-full p-2 cursor-pointer transition-all font-inter  ${
          isSelected
            ? "bg-custom-turquoise-100 text-custom-turquoise-500 font-bold"
            : "bg-gray-200 text-gray-700 font-reguler"
        }`}
        onClick={() => onClick && onClick(id)}
      >
        {name}
      </div>
    </div>
  );
};

export default CategoryTag;
