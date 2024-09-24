type DescriptionItem =
  | {
      isList: false;
      data: string;
    }
  | { isList: true; data: string[] };

type Experience = {
  date: string;
  title: string;
  location: string;
  description: DescriptionItem[];
};

type Education = {
  date: string;
  title: string;
  grade: string;
  location: string;
  description: DescriptionItem[];
};

type Volunteering = {
  title: string;

  description: DescriptionItem[];
};

export type CVDataType = {
  me: {
    name: string;
    job: string;
    statement: string;
  };
  contact: {
    phone?: string;
    email?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  experience: Experience[];
  skills: { type: string; list: string[] }[];
  education: Education[];
  volunteering?: Volunteering[];
};
