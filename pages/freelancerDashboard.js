import LancerProfile from "@/db/freelancerProfile";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "tailwindcss/tailwind.css";

const FreelancerDashboard = () => {
  const router = useRouter();
  const [freelancerDetails, setFreelancerDetails] = useState({
    name: "",
    pronoun: "",
    Experience: "",
    goal: "",
    manual: {
      fieldOfWork: "",
      skills: [],
      role: "",
      experience: [
        {
          placeofWork: "",
          company: "",
          Location: "",
          start: "",
          present: "",
          description: "",
        },
      ],
      education: {
        sslc: "",
        hsc: "",
        university: "",
      },
      language: [],
      bio: {
        link: "",
        content: "",
      },
      payment: "",
      location: "",
      dob: "",
      address: {
        dno: "",
        street: "",
        city: "",
        state: "",
        pincode: "",
      },
    },
  });
  const [count, setCount] = useState(1);
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "CSS",
    "HTML",
    "Python",
    "Ruby",
    "Go",
    "Java",
    "TypeScript",
  ];

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleComplete = async () => {
    try {
      const res = await LancerProfile(freelancerDetails);

      if (res) {
        router.push("/dashboard");
      } else {
        router.push("/freelancerDashboard");
      }
    } catch (error) {
      console.error("Error during profile submission:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {count === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center mb-4">
              Your Details
            </h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={(e) =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    name: e.target.value,
                  })
                }
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pronoun" className="block text-sm font-medium">
                Pronoun
              </label>
              <input
                type="text"
                id="pronoun"
                placeholder="Enter your pronoun (e.g., He/Him, She/Her)"
                onChange={(e) =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    pronoun: e.target.value,
                  })
                }
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {count === 2 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Select Your Experience Level
            </h2>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  freelancerDetails.Experience === "New"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 hover:text-white`}
                onClick={() =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    Experience: "New",
                  })
                }
              >
                New
              </button>

              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  freelancerDetails.Experience === "Intermediate"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 hover:text-white`}
                onClick={() =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    Experience: "Intermediate",
                  })
                }
              >
                Intermediate
              </button>

              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  freelancerDetails.Experience === "Expert"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 hover:text-white`}
                onClick={() =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    Experience: "Expert",
                  })
                }
              >
                Expert
              </button>
            </div>
          </>
        )}

        {count === 3 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Select Your Goal
            </h2>
            <div className="flex flex-col gap-4">
              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  freelancerDetails.goal === "Earn Money"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 hover:text-white`}
                onClick={() =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    goal: "Earn Money",
                  })
                }
              >
                Earn Money
              </button>

              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  freelancerDetails.goal === "Learn Skills"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 hover:text-white`}
                onClick={() =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    goal: "Learn Skills",
                  })
                }
              >
                Learn Skills
              </button>

              <button
                type="button"
                className={`py-2 px-4 rounded-md border ${
                  freelancerDetails.goal === "Hobby"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-400 hover:text-white`}
                onClick={() =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    goal: "Hobby",
                  })
                }
              >
                Hobby
              </button>
            </div>
          </>
        )}

        {count === 4 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Your Work Details
            </h2>

            <div className="mb-4">
              <label
                htmlFor="fieldOfWork"
                className="block text-sm font-medium"
              >
                Field of Work
              </label>
              <input
                type="text"
                id="fieldOfWork"
                placeholder="Enter your field of work"
                onChange={(e) =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      fieldOfWork: e.target.value,
                    },
                  })
                }
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium">
                Role
              </label>
              <input
                type="text"
                id="role"
                placeholder="Enter your role"
                onChange={(e) =>
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      role: e.target.value,
                    },
                  })
                }
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="skills" className="block text-sm font-medium">
                Select Skills
              </label>
              <div className="flex flex-wrap gap-4 mt-2">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={skill}
                      value={skill}
                      checked={freelancerDetails.manual.skills.includes(skill)}
                      onChange={(e) => {
                        const skillName = e.target.value;
                        const isChecked = e.target.checked;
                        setFreelancerDetails({
                          ...freelancerDetails,
                          manual: {
                            ...freelancerDetails.manual,
                            skills: isChecked
                              ? [...freelancerDetails.manual.skills, skillName]
                              : freelancerDetails.manual.skills.filter(
                                  (item) => item !== skillName
                                ),
                          },
                        });
                      }}
                      className="p-2 border border-gray-300 rounded-md"
                    />
                    <label htmlFor={skill} className="text-sm">
                      {skill}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium">Selected Skills:</h3>
                <div className="flex flex-wrap gap-2">
                  {freelancerDetails.manual.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {count === 5 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Your Work Experience
            </h2>

            <div className="mb-4">
              <label
                htmlFor="placeOfWork"
                className="block text-sm font-medium"
              >
                Place of Work
              </label>
              <input
                type="text"
                id="placeOfWork"
                placeholder="Enter the place of work"
                value={
                  freelancerDetails.manual.experience[
                    freelancerDetails.manual.experience.length - 1
                  ].placeofWork || ""
                }
                onChange={(e) => {
                  const updatedExperience = [
                    ...freelancerDetails.manual.experience,
                  ];
                  updatedExperience[updatedExperience.length - 1].placeofWork =
                    e.target.value;
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: updatedExperience,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company" className="block text-sm font-medium">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Enter the company name"
                value={
                  freelancerDetails.manual.experience[
                    freelancerDetails.manual.experience.length - 1
                  ].company || ""
                }
                onChange={(e) => {
                  const updatedExperience = [
                    ...freelancerDetails.manual.experience,
                  ];
                  updatedExperience[updatedExperience.length - 1].company =
                    e.target.value;
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: updatedExperience,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter the location"
                value={
                  freelancerDetails.manual.experience[
                    freelancerDetails.manual.experience.length - 1
                  ].Location || ""
                }
                onChange={(e) => {
                  const updatedExperience = [
                    ...freelancerDetails.manual.experience,
                  ];
                  updatedExperience[updatedExperience.length - 1].Location =
                    e.target.value;
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: updatedExperience,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="startDate" className="block text-sm font-medium">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={
                  freelancerDetails.manual.experience[
                    freelancerDetails.manual.experience.length - 1
                  ].start || ""
                }
                onChange={(e) => {
                  const updatedExperience = [
                    ...freelancerDetails.manual.experience,
                  ];
                  updatedExperience[updatedExperience.length - 1].start =
                    e.target.value;
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: updatedExperience,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Checkbox to toggle End Date visibility */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="presentlyWorkHere"
                checked={
                  freelancerDetails.manual.experience[
                    freelancerDetails.manual.experience.length - 1
                  ].present
                }
                onChange={(e) => {
                  const updatedExperience = [
                    ...freelancerDetails.manual.experience,
                  ];
                  updatedExperience[updatedExperience.length - 1].present = e
                    .target.checked
                    ? "Present"
                    : "";
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: updatedExperience,
                    },
                  });
                }}
                className="mr-2"
              />
              <label htmlFor="presentlyWorkHere" className="text-sm">
                I presently work here
              </label>
            </div>

            {/* Conditionally render End Date */}
            {!freelancerDetails.manual.experience[
              freelancerDetails.manual.experience.length - 1
            ].present && (
              <div className="mb-4">
                <label htmlFor="endDate" className="block text-sm font-medium">
                  End Date (if applicable)
                </label>
                <input
                  type="date"
                  id="endDate"
                  value={
                    freelancerDetails.manual.experience[
                      freelancerDetails.manual.experience.length - 1
                    ].end || ""
                  }
                  onChange={(e) => {
                    const updatedExperience = [
                      ...freelancerDetails.manual.experience,
                    ];
                    updatedExperience[updatedExperience.length - 1].end =
                      e.target.value;
                    setFreelancerDetails({
                      ...freelancerDetails,
                      manual: {
                        ...freelancerDetails.manual,
                        experience: updatedExperience,
                      },
                    });
                  }}
                  className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Job Description
              </label>
              <textarea
                id="description"
                placeholder="Describe your job responsibilities"
                value={
                  freelancerDetails.manual.experience[
                    freelancerDetails.manual.experience.length - 1
                  ].description || ""
                }
                onChange={(e) => {
                  const updatedExperience = [
                    ...freelancerDetails.manual.experience,
                  ];
                  updatedExperience[updatedExperience.length - 1].description =
                    e.target.value;
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: updatedExperience,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  // Cancel the experience entry by resetting the form inputs
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      experience: [
                        ...freelancerDetails.manual.experience.slice(0, -1), // Preserve previous experience
                        {
                          placeofWork: "",
                          company: "",
                          Location: "",
                          start: "",
                          end: "",
                          present: "",
                          description: "",
                        },
                      ],
                    },
                  });
                }}
                className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => {
                  const currentExperience =
                    freelancerDetails.manual.experience[
                      freelancerDetails.manual.experience.length - 1
                    ];

                  // Check if the current experience is filled in
                  if (
                    currentExperience.placeofWork ||
                    currentExperience.company ||
                    currentExperience.Location ||
                    currentExperience.start ||
                    currentExperience.description
                  ) {
                    // Add the new empty experience only if the current one is filled in
                    setFreelancerDetails({
                      ...freelancerDetails,
                      manual: {
                        ...freelancerDetails.manual,
                        experience: [
                          ...freelancerDetails.manual.experience,
                          {
                            placeofWork: "",
                            company: "",
                            Location: "",
                            start: "",
                            end: "",
                            present: "",
                            description: "",
                          },
                        ],
                      },
                    });
                  } else {
                    console.log(
                      "Please fill in the current experience details before adding a new one."
                    );
                  }
                }}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Add Experience
              </button>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Saved Jobs</h3>
              {freelancerDetails.manual.experience.length > 1 ? (
                <ul className="space-y-4">
                  {freelancerDetails.manual.experience
                    .slice(0, -1)
                    .map((job, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 p-4 rounded-md shadow-sm"
                      >
                        <h4 className="font-bold">{job.company}</h4>
                        <p>
                          {job.placeofWork} - {job.Location}
                        </p>
                        <p>
                          {job.start} - {job.present ? "Present" : job.end}
                        </p>
                        <p>{job.description}</p>
                        <button
                          type="button"
                          onClick={() => {
                            const updatedExperience =
                              freelancerDetails.manual.experience.filter(
                                (_, i) => i !== index
                              );
                            setFreelancerDetails({
                              ...freelancerDetails,
                              manual: {
                                ...freelancerDetails.manual,
                                experience: updatedExperience,
                              },
                            });
                          }}
                          className="mt-2 py-1 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                </ul>
              ) : (
                <p>No saved jobs yet.</p>
              )}
            </div>
          </>
        )}

        {count === 6 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Your Education Details
            </h2>

            <div className="mb-4">
              <label htmlFor="sslc" className="block text-sm font-medium">
                SSLC / 10th Marks (in percentage)
              </label>
              <input
                type="number"
                id="sslc"
                placeholder="Enter your SSLC / 10th marks"
                value={freelancerDetails.manual.education.sslc || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      education: {
                        ...freelancerDetails.manual.education,
                        sslc: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="hsc" className="block text-sm font-medium">
                HSC / 12th Marks (in percentage)
              </label>
              <input
                type="number"
                id="hsc"
                placeholder="Enter your HSC / 12th marks"
                value={freelancerDetails.manual.education.hsc || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      education: {
                        ...freelancerDetails.manual.education,
                        hsc: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="university" className="block text-sm font-medium">
                University / Graduation Marks (in percentage)
              </label>
              <input
                type="number"
                id="university"
                placeholder="Enter your University / Graduation marks"
                value={freelancerDetails.manual.education.university || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      education: {
                        ...freelancerDetails.manual.education,
                        university: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {count === 7 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Languages
            </h2>

            <div className="mb-4">
              <label className="block text-sm font-medium">
                Choose a language
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  "English",
                  "Spanish",
                  "French",
                  "German",
                  "Mandarin",
                  "Hindi",
                  "Arabic",
                ].map((lang, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      if (!freelancerDetails.manual.language.includes(lang)) {
                        setFreelancerDetails({
                          ...freelancerDetails,
                          manual: {
                            ...freelancerDetails.manual,
                            language: [
                              ...freelancerDetails.manual.language,
                              lang,
                            ],
                          },
                        });
                      }
                    }}
                    className="py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold">Selected Languages</h3>
              {freelancerDetails.manual.language.length > 0 ? (
                <ul className="space-y-2">
                  {freelancerDetails.manual.language.map((lang, index) => (
                    <li key={index} className="bg-gray-100 p-2 rounded-md">
                      <span>{lang}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const updatedLanguages =
                            freelancerDetails.manual.language.filter(
                              (language) => language !== lang
                            );
                          setFreelancerDetails({
                            ...freelancerDetails,
                            manual: {
                              ...freelancerDetails.manual,
                              language: updatedLanguages,
                            },
                          });
                        }}
                        className="ml-2 py-1 px-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No languages selected yet.</p>
              )}
            </div>
          </>
        )}

        {count === 8 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">Bio</h2>

            <div className="mb-4">
              <label htmlFor="link" className="block text-sm font-medium">
                Link
              </label>
              <input
                type="url"
                id="link"
                placeholder="Enter your bio link (e.g., personal website or portfolio)"
                value={freelancerDetails.manual.bio.link || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      bio: {
                        ...freelancerDetails.manual.bio,
                        link: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Bio Description Input */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Write a brief description about yourself"
                value={freelancerDetails.manual.bio.content || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      bio: {
                        ...freelancerDetails.manual.bio,
                        content: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {count === 9 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Payment & Location
            </h2>

            <div className="mb-4">
              <label htmlFor="payment" className="block text-sm font-medium">
                Amount You Want
              </label>
              <input
                type="number"
                id="payment"
                placeholder="Enter the amount you want to charge"
                value={freelancerDetails.manual.payment || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      payment: e.target.value,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="fee" className="block text-sm font-medium">
                Fee
              </label>
              <input
                type="text"
                id="fee"
                value="10%"
                readOnly
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="total" className="block text-sm font-medium">
                Total After Fee
              </label>
              <input
                type="text"
                id="total"
                value={
                  freelancerDetails.manual.payment
                    ? (freelancerDetails.manual.payment * 0.9).toFixed(2)
                    : ""
                }
                readOnly
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                value={freelancerDetails.manual.location || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      location: e.target.value,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                value={freelancerDetails.manual.dob || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      dob: e.target.value,
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {count === 10 && (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">Address</h2>

            <div className="mb-4">
              <label htmlFor="dno" className="block text-sm font-medium">
                Door Number
              </label>
              <input
                type="text"
                id="dno"
                placeholder="Enter the door number"
                value={freelancerDetails.manual.address.dno || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      address: {
                        ...freelancerDetails.manual.address,
                        dno: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="street" className="block text-sm font-medium">
                Street
              </label>
              <input
                type="text"
                id="street"
                placeholder="Enter your street name"
                value={freelancerDetails.manual.address.street || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      address: {
                        ...freelancerDetails.manual.address,
                        street: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                value={freelancerDetails.manual.address.city || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      address: {
                        ...freelancerDetails.manual.address,
                        city: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="state" className="block text-sm font-medium">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                value={freelancerDetails.manual.address.state || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      address: {
                        ...freelancerDetails.manual.address,
                        state: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pincode" className="block text-sm font-medium">
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                placeholder="Enter your pincode"
                value={freelancerDetails.manual.address.pincode || ""}
                onChange={(e) => {
                  setFreelancerDetails({
                    ...freelancerDetails,
                    manual: {
                      ...freelancerDetails.manual,
                      address: {
                        ...freelancerDetails.manual.address,
                        pincode: e.target.value,
                      },
                    },
                  });
                }}
                className="w-full mt-1 p-2 bg-white border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </>
        )}

        <div className="flex justify-center gap-3 mt-4">
          {count > 1 && (
            <button
              type="button"
              onClick={handleDecrement}
              className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Prev
            </button>
          )}
          {count === 10 ? (
            <button
              type="button"
              onClick={handleComplete}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              complete
            </button>
          ) : (
            <button
              type="button"
              onClick={handleIncrement}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;
