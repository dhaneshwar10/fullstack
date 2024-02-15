package com.birthdayevent.dhanesh.dto.response;


import java.util.Collections;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Builder
@AllArgsConstructor
public class BasicResponse <T>{
    private String message;

    @Builder.Default
    private List<T> data=Collections.emptyList();
}
