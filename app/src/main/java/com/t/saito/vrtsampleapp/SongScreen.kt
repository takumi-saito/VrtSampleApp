package com.t.saito.vrtsampleapp

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import coil.compose.rememberImagePainter
import com.t.saito.vrtsampleapp.ui.theme.VrtSampleAppTheme

data class Song(
    val imageUrl: String,
    val title: String,
    val artist: String
) {
    companion object {
        fun sample(num: Int) = Song(
            imageUrl = "https://picsum.photos/id/$num/200/300",
            title = "DynamiteDynamiteDynamite",
            artist = "BTSBTSBTS"
        )

        val samples = (1..10).map { sample(it) }
    }
}

@Composable
fun SongListScreen(
    songs: List<Song>,
    modifier: Modifier = Modifier
) {
    Scaffold {
        LazyColumn(modifier = modifier.padding(it)) {
            items(songs) { song ->
                SongItem(song = song)
            }
        }
    }
}

@Preview
@Composable
fun SongListScreenPreview() {
    VrtSampleAppTheme {
        Surface {
            SongListScreen(
                songs = Song.samples,
            )
        }
    }
}

@Composable
fun SongItem(song: Song) {
    Row(verticalAlignment = Alignment.CenterVertically) {
        Image(
            painter = rememberImagePainter(data = song.imageUrl),
            contentDescription = null,
            modifier = Modifier.size(60.dp)
        )
        Column(modifier = Modifier.padding(start = 8.dp)) {
            Text(text = song.title, fontWeight = FontWeight.Bold)
            Text(text = song.artist)
        }
    }
}
