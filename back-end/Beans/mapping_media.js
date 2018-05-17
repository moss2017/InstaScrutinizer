class media {
    comments;
    caption;
    likes;
    link;
    user;
    created_time;
    images;
    type;
    users_in_photo;
    filter;
    tags;
    id;
    location;
    
    constructor(comments, caption, likes, link, user, created_time, images, type, users_in_photo, filter, tags, id, location){
        this.comments = comments;
        this.caption = caption;
        this.likes = likes;
        this.link = link;
        this.user = user;
        this.created_time = created_time;
        this.images = images;
        this.type = type;
        this.users_in_photo = users_in_photo;
        this.filter = filter;
        this.tags = tags;
        this.id = id;
        this.location = location;
   }
}
