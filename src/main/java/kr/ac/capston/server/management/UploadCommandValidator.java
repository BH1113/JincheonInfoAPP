package kr.ac.capston.server.management;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class UploadCommandValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {return ManagementRequest.class.isAssignableFrom(clazz);}

    @Override
    public void validate(Object target, Errors errors){
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "required");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "detailIntro", "required");
    }
}
