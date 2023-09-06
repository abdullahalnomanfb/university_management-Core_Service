import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    academicFacultyId:z.string({
        required_error:"Academic Facility ID is required"
    })
  }),
});

export const AcademicDepartmentValidation = {
  create,
};
