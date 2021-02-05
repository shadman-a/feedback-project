package com.example.feedback.controllers;


import com.example.feedback.model.Feedback;
import com.example.feedback.repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class FeedbackController {


    @Autowired
    private FeedbackRepository repo;


    @GetMapping("/")
    public String showServiceName() {
        return "Feedback";
    }

    @GetMapping("/feedback")
    public Iterable<Feedback> getPlaces() {
        return repo.findAll();
    }

    @GetMapping("/feedback/{id}")
    public Feedback showFeedbackById(@PathVariable Integer id) {
        return repo.findById(id).get();
    }


    @PostMapping("/feedback")
    public Feedback addFeedback(@RequestBody Feedback newFeedback) {

        return repo.save(newFeedback);
    }


}
