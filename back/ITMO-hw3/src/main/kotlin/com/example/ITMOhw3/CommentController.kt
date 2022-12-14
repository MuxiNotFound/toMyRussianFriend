package com.example.ITMOhw3

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
class CommentController {

    var commonList: MutableList<CommentModel> = mutableListOf()

    @GetMapping("/allComments")
    fun allComments(): MutableList<CommentModel> {

        return commonList
    }

    @PostMapping("/addComment")
    fun addComment(@RequestBody comment: CommentModel): ResponseEntity<Any> {
        var receiveAuthor = comment.author
        var receiveComment = comment.comment
        if(receiveAuthor.isNullOrBlank() || receiveComment.isNullOrBlank() || receiveAuthor.length > 100 || receiveComment.length > 1000){
            return ResponseEntity(HttpStatus.BAD_REQUEST)
        }
        commonList.add(comment)
        return ResponseEntity(HttpStatus.ACCEPTED)
    }
}
