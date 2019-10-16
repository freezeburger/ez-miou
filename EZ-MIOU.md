## Repartition


* button  : thomas*
* avatar  : cyriaque
* image-slider  : norbert
* message  : cyriaque
* message-list  : vincent
* notifier : ludovic
* room-card : christophe
* room-cloud : raf > . <
* room-creator : didier
* room-searh : didier
* talk-editor : raf > . <
* talk-header : younes
* user-list : constant
* user-profile : younes

## EZ-MIOU


![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaG-VV1U-ni1osTrjwG0tU6AFaArmvOnKcZ2UZjxxPMFWzFpMm)

> THE PURR CHAT

## Fonctionnalities

* User
* Message
* Room
* Talk
* Notification

* User
    * signin
    * signup
    * signout
    * sendMessage
    * createRoom
    * joinRoom
* Notification
    * pop
* Sorage
    * local
        * read
        * save
        * flush
    * remote
        * read
        * save

## DATA

* Auth
* Room
* Talk
* Message
* Notification
* User

## EVOL

* P2P
* Mute user
* Gestion status
* Upload
* User power



```mermaid
graph TD;

Auth---User
Room---Talk---User
Message---Notification
Notification---User

```

```mermaid
graph LR;



subgraph HOME TD;
    HOME---AuthForm
    HOME---Logo
    AuthForm---AuthSignIn
    AuthForm---AuthSignUp
end;

subgraph ROOM TD;
    ROOM---RoomCloud
    ROOM---RoomSearch
    ROOM---RoomCreate
    ROOM---ImageSlide
end;

subgraph TALK TD;
    TALK---Header
    TALK---UserList
    TALK---MessageList
    TALK---Editor
end;

```