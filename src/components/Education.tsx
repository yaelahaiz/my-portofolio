interface TEducation {
  education: {
    start_year?: number | null;
    end_year?: number | null;
    degree: string;
    school: string;
    description: string;
  };
}

const Education = (props: TEducation) => {
  const { education } = props;

  return (
    <li className="ml-5">
      <div className="absolute w-3 h-3 bg-primary-500 rounded-full mt-1.5 -left-1.5 border border-white"></div>
      {education?.start_year && education?.end_year ? (
        <time className="mb-1 text-sm font-normal leading-none text-gray-600">
          {education.start_year} - {education.end_year ?? "now"}
        </time>
      ) : null}
      <h3 className="text-base font-semibold text-gray-900">
        {education.degree} / {education.school}
      </h3>
      {education.description ? <p className="text-sm font-normal text-gray-500">{education.description}</p> : null}
    </li>
  );
};

export default Education;
