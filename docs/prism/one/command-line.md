---
label: "Command Line"
url: "/commandline" 
icon: "icon-menu-hamburger"
title: "Command Line"
---

The **CommandLine** is a *console* applicaiton can be opened from the system tray once **Prism One** is running. It is a way to interact with the server which runs in the background and has most of all features that the UI executes. Typing `help` will allow you to view all functions available. Successfully called functions will also keep the UI updated.

### Functions

The functions listed should be typed directly into the console some may require parameter(s) and some not.

*Note: To enter a full filepath or folder, you can simply drag in the folder or file into the console*

<div className="tableLeftAlign">

|**Console Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `help` | none | Show all phantom commands available |
| `clear`| none | Clear Prism Command line |
| `exit` | none | Quit command line |

|**Application Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `undo` | none | Undo last action |
| `redo` | none | Redo last action |
| `clear_undo_cache` | none | Clear undo history |
| `save_project` | folder <br /> filename (.json) | Save Project (Settings, Playlist and Encodelist) |
| `load_project` | folder <br /> filename (.json) | Load Project (Settings, Playlist and Encodelist) |

|**Settings Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `select_gpu_adaptor` | index (from 0) | Select the graphics card to run on |
| `select_audio_device` | index (from 0) | Select the audio device |
| `set_default_encoder_folder` | folder directory | Set the default folder for encoding files |
| `set_autoupdate_encoder_folder` | true / false | Set whether encodelist elements auto update their destination folder |
| `set_keep_server_running` | true / false | Set server to keep running on UI closing |
| `set_disable_ui_warnings` | true / false | Disable UI warnings |
| `set_global_step_amount`| int (0 - 20) | Set how much the player will step by |
| `set_output_video_device` | index (from 0) | Set which output to send video frames |
| `enable_output_video_device` | true / false | Enable the video on the selected output |
| `set_ndi_properties` | name <br /> width <br /> height <br /> refresh rate | Setup properties of ndi |
| `set_ndi_enabled` | true / false | Enable sending of NDI feed |
| `set_dmx_adaptor` | index (from 0) | Select a DMX adaptor |
| `set_dmx_protocol` | index (from 0) | Select a DMX protocol |
| `set_dmx_universe` | universe (from 0) | Set a DMX universe |
| `set_dmx_start_channel` | channel (0 - 511) | Set the starting DMX channel |
| `set_dmx_enabled` | true / false | Enable incoming DMX |

| **MediaPlayer Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `load_media` | folder <br /> filename | Load a file into media player only |
| `load_from_playlist` | id (from 0) | Load from the playlist into media player |
| `next` | none | Play next video in playlist |
| `previous` | none | Play previous video in playlist |
| `play` | none | Play loaded media file |
| `pause` | none | Seek current playing media |
| `seek` | seek position (0 - 1 range) | Play from any point of the loaded media file |
| `seek_frame` | seek position (frame number) | Play from a frame of the loaded media file |
| `set_aspect_mode` | fit / box / center / window | Set the aspect mode |
| `set_trim_points` | in (0 - 1 range) <br /> out (0 - 1 range) | Set the trim points |
| `set_transparency_preview` | true / false | Enables / Disables transparency preview (checkerboard background) |
| `set_grid_preview` | true / false | Enables / Disables grid preview (3 grid overlay) |
| `set_volume` | volume (0 - 1 range) | Set the volume amount |
| `set_mute` | true / false | Mutes / Unmutes volume 

|**Playlist Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `playlist` | none | Show all playlist elements added |
| `playlist_import` | folder <br /> filename | Import a playlist |
| `playlist_export` | folder <br /> filename | Export a playlist |
| `playlist_add` | filepath | Add file into playlist |
| `playlist_add_folder` | path | Add folder / subfolders into playlist |
| `playlist_remove` | id (from 0) | Remove file from playlist |
| `playlist_select` | id (from 0) | Select element in playlist |
| `playlist_unselect` | id (from 0) | Unselect element in playlist |
| `playlist_reorder` | current id (from 0) <br /> new id (from 0) | Reorder elements in playlist |
| `playlist_trim` | id (from 0) <br /> in (0 - 1 range) <br /> out (0 - 1 range) | Adjust playback in / out point of a playlist element |
| `playlist_tag_name` | id (from 0) <br /> new tag name | Set the playlist tag name to be used in encodelist |
| `playlist_add_to_encodelist` | id (from 0) | Send playlist element to encodelist |


|**Encodelist Functions**| **Parameters Required** | **Description** |
|-|-|-|
| `encodelist` | filepath | Show all encoder elements added |
| `encodelist_import` | folder <br /> filename | Import a encodelist |
| `encodelist_export` | filepath | Export a encodelist |
| `encodelist_add` | filepath | Add file into encodelist |
| `encodelist_add_folder` | path <br /> Add folder | Subfolders into encodelist |
| `encodelist_remove` | id (from 0) | Remove file from encodelist |
| `encodelist_select` | id (from 0) | Select element in encodelist |
| `encodelist_unselect` | id (from 0) | Unselect element in encodelist |
| `encodelist_reorder` | current id (from 0) <br /> new id (from 0) | Reorder elements in encodelist |
| `encodelist_set_codec` | id (from 0) <br /> codec <br /> sub_codec | Update codec in encodelist |
| `encodelist_update_file_details` | id (from 0) <br /> folder <br /> filename | Update folder and filename in encodelist element settings |
| `encodelist_crop` | id (from 0) <br /> x <br />  y <br /> width <br />  height | Update crop area in encodelist element settings |
| `encodelist_trim` | id (from 0) <br /> trim_in (0 - 1 range) <br />  trim_out (0 - 1 range) | Update trim in encodelist element settings |
| `encodelist_set_alpha_enabled` | id (from 0) <br /> true / false | Set encodelist element alpha enabled |
| `encodelist_set_audio_enabled` | id (from 0) <br /> true / false | Set encodelist element audio enabled |
| `encodelist_duplicate` | id (from 0) | Duplicate encodelist element |

|**Transcoder Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `transcoder_start` | none | Start the transcoder |
| `transcoder_pause` | none | Pause the transcoder |
| `transcoder_stop`  | none | Stop the transcoder  |

<!-- |**Stream Functions**| **Parameters Required** | **Description**|
|-|-|-|
| `register_playhead_stream` | none | Start listening to a stream for the position of the playhead |
| `unregister_playhead_stream` | none | Stop listening to a stream for the position of the playhead |
| `print_playhead_position` | none | Prints the current position of the playhead | -->

</div>