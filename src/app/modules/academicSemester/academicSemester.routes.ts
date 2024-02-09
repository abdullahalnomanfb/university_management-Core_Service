import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(AcademicSemesterValidation.create),
  auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.STUDENT),
  AcademicSemesterController.insertIntoDB
);
router.get(
  '/',
  AcademicSemesterController.getAllFromDB
);
router.get(
  '/:id',
  AcademicSemesterController.getDataById
);
router.patch(
  '/:id',
  AcademicSemesterController.updateOneInDB
);


export const AcademicSemesterRoutes = router;
