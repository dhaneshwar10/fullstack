package com.birthdayevent.dhanesh.service.impl;


import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.birthdayevent.dhanesh.UserRepository.EdetailsRepository;
import com.birthdayevent.dhanesh.dto.request.EdetailsRequest;
import com.birthdayevent.dhanesh.dto.response.BasicResponse;
import com.birthdayevent.dhanesh.dto.response.EdetailsResponse;
import com.birthdayevent.dhanesh.model.EventDetails;
import com.birthdayevent.dhanesh.service.EdetailsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EdetailsServiceImpl implements EdetailsService{

    private final EdetailsRepository edetailsRepository;
   
    @Override
    public BasicResponse<EdetailsResponse> getAllUser() {
        List<EventDetails> events=edetailsRepository.findAll();
       
        List<EdetailsResponse> edetailsResponses = events.stream()
        .map(event-> EdetailsResponse.builder()
        .id(event.getId())
        .eventname(event.getEventname())
        .location(event.getLocation())
        .themename(event.getThemename())
        .pgname(event.getPhotographername())
        .vgname(event.getVideographername())
        .pgnumber(event.getPhotographernumber())
        .vgnumber(event.getVideographernumber())
        .image(event.getImage())
        
        .themecost(event.getThemecost())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<EdetailsResponse>builder()
        .message("User Data fetched").data(edetailsResponses).build();
    }
    @Override
        public BasicResponse<EdetailsResponse> deletebooking(Long id) {
            
            if (edetailsRepository.existsById(id)) {
                edetailsRepository.deleteById(id);
                return BasicResponse.<EdetailsResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<EdetailsResponse>builder()
                    .message("Booking not found with ID: " + id)
                    .build();
            }
        }

        @Override
        public BasicResponse<EdetailsResponse> updateBooking(Long id, EdetailsRequest request) {
            // Retrieve the existing booking from the repository
            EventDetails existingBooking = edetailsRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + id));
        
            // Update the booking details
            existingBooking.setEventname(request.getEventname());
            existingBooking.setImage(request.getImage());
            existingBooking.setLocation(request.getLocation());
            existingBooking.setPhotographername(request.getPgname());
            existingBooking.setPhotographernumber(request.getPgnumber());
            existingBooking.setThemecost(request.getThemecost());
            existingBooking.setThemename(request.getThemename());
            existingBooking.setVideographername(request.getVgname());
            existingBooking.setVideographernumber(request.getVgnumber());

        
            // Save the updated booking to the repository
            edetailsRepository.save(existingBooking);
        
            // Construct and return the response
            EdetailsResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<EdetailsResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }


        private EdetailsResponse mapToBookingResponse(EventDetails existingBooking) {
            // TODO Auto-generated method stub
            return EdetailsResponse.builder()
            .id(existingBooking.getId())
            .eventname(existingBooking.getEventname())
            .location(existingBooking.getLocation())
            .themename(existingBooking.getThemename())
            .pgname(existingBooking.getPhotographername())
            .vgname(existingBooking.getVideographername())
            .pgnumber(existingBooking.getPhotographernumber())
            .vgnumber(existingBooking.getVideographernumber())
            .image(existingBooking.getImage())
            .themecost(existingBooking.getThemecost())
            .build();
        }

}